package com.abhijeet20.joblisting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.abhijeet20.joblisting.model.Post;

public interface PostRepository extends MongoRepository<Post, String> {

}
