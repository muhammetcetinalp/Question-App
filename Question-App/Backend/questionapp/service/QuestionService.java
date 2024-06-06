package com.project.questionapp.service;

import org.springframework.stereotype.Service;
import com.project.questionapp.model.Question;
import com.project.questionapp.repository.QuestionRepository;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collections;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public List<Question> getQuestions(String category, String difficulty, String type, int amount) {
        List<Question> questions = questionRepository.findAll();

        if (category != null) {
            questions = questions.stream()
                    .filter(q -> q.getCategory().equals(category))
                    .collect(Collectors.toList());
        }

        if (difficulty != null) {
            questions = questions.stream()
                    .filter(q -> q.getDifficulty().equals(difficulty))
                    .collect(Collectors.toList());
        }

        if (type != null) {
            questions = questions.stream()
                    .filter(q -> q.getType().equals(type))
                    .collect(Collectors.toList());
        }

        Collections.shuffle(questions);
        return questions.stream().limit(amount).collect(Collectors.toList());
    }
}
