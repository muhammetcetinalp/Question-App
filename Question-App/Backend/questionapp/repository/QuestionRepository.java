package com.project.questionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.questionapp.model.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByCategoryAndDifficulty(String category, String difficulty);

    List<Question> findByDifficulty(String difficulty);

    List<Question> findByCategory(String category);


}
