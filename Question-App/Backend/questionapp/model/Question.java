package com.project.questionapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "Questions")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "type")
    String type;
    @Column(name = "difficulty")
    String difficulty;
    @Column(name = "category")
    String category;

    @Column(name = "question")
    String question;

    @Column(name = "correct_answer")
    String correct_answer;

    @ElementCollection
    @CollectionTable(name="incorrect_answers", joinColumns=@JoinColumn(name="id"))
    @Column(name="incorrect_answers")
    List<String> incorrect_answers;

}
