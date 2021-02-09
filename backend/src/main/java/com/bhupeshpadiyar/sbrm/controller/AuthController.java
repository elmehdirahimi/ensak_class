package com.bhupeshpadiyar.sbrm.controller;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhupeshpadiyar.sbrm.model.ERole;
import com.bhupeshpadiyar.sbrm.model.Role;
import com.bhupeshpadiyar.sbrm.model.User;
import com.bhupeshpadiyar.sbrm.payload.request.LoginRequest;
import com.bhupeshpadiyar.sbrm.payload.request.SignupRequest;
import com.bhupeshpadiyar.sbrm.payload.response.JwtResponse;
import com.bhupeshpadiyar.sbrm.payload.response.MessageResponse;
import com.bhupeshpadiyar.sbrm.repository.EtudiantInterface;
import com.bhupeshpadiyar.sbrm.repository.RoleRepository;
import com.bhupeshpadiyar.sbrm.repository.UserRepository;
import com.bhupeshpadiyar.sbrm.security.jwt.JwtUtils;
import com.bhupeshpadiyar.sbrm.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	EtudiantInterface etudiantInterface;


	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
	}

	
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getNom(),signUpRequest.getPrenom(),signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		String strRoles = signUpRequest.getRoles();
		HashSet<Role> roles = new HashSet<Role>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {

			switch (strRoles) {
			/// on va l'a supprime
			/////
			
			///
			
			////
			case "admin":
				Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(adminRole);
				
				break;
			case "prof":
				Role modRole = roleRepository.findByName(ERole.ROLE_PROF)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(modRole);
				
				break;
			default:
				Role userRole = roleRepository.findByName(ERole.ROLE_USER)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(userRole);
				if (!etudiantInterface.existsByEmail(signUpRequest.getEmail())) {
					return ResponseEntity.badRequest().
							body(new MessageResponse("Error: Ce etudiant n'existe pas dans la base de donnee"));
				}
			}

		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
