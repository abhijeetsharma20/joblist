package com.abhijeet20.joblisting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abhijeet20.joblisting.model.Post;
import com.abhijeet20.joblisting.repository.PostRepository;
import com.abhijeet20.joblisting.repository.SearchRepository;

@CrossOrigin("*")
@RestController
public class PostController {

	@Autowired
	private PostRepository repo;

	@Autowired
	private SearchRepository s_repo;

	@GetMapping("/posts")
	public List<Post> getAllPosts() {
		return repo.findAll();
	}

	@GetMapping("/posts/{text}")
	public List<Post> search(@PathVariable String text) {
		return s_repo.findByText(text);
	}

	@PostMapping("/post")
	public void addPost(@RequestBody Post post) {
		repo.save(post);
	}
}
