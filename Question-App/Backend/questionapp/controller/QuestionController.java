package com.project.questionapp.controller;

import org.springframework.web.bind.annotation.*;
import com.project.questionapp.model.Question;
import com.project.questionapp.service.QuestionService;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:3001")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService){
        this.questionService = questionService;
    }

    @GetMapping("/all")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/questions")
    public List<Question> getQuestions(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "difficulty", required = false) String difficulty,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "amount", required = false, defaultValue = "2") int amount) {

        return questionService.getQuestions(category, difficulty, type, amount);
    }

    @PostMapping()
    public Question createQuestion(@RequestBody Question newQuestion) {
        return questionService.createQuestion(newQuestion);
    }


    @PostMapping("/bulk")
    public List<Question> createQuestions(@RequestBody List<Question> questions) {
        List<Question> createdQuestions = new ArrayList<>();
        for (Question question : questions) {
            createdQuestions.add(questionService.createQuestion(question));
        }
        return createdQuestions;
    }

}