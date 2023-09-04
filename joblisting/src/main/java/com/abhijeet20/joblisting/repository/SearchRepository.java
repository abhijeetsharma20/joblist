package com.abhijeet20.joblisting.repository;

import java.util.List;

import com.abhijeet20.joblisting.model.Post;

public interface SearchRepository {
	List<Post> findByText(String text);
}
