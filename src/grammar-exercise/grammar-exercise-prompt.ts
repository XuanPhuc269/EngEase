export const generateGrammarExercisePrompt = (topic: string, number_of_questions: number): string => {
    return `You are an English teacher creating grammar exercises for secondary to high school students in Vietnam.

        Please generate ${number_of_questions} multiple-choice grammar questions based on the topic: "${topic}".
        Each question should meet the following criteria:

        1. The question is a complete sentence with a blank to fill.
        2. Each question should have exactly 4 options (A, B, C, D), with only one correct answer.
        3. The grammar should be appropriate for students aged 13–18 with intermediate level English.
        4. Include a clear indication of the correct answer for each question.
        5. Avoid overly complex vocabulary or academic grammar structures.

        Output format (JSON):
        [
        {
            "question": "I'm very happy _____ in India. I really miss being there.",
            "options": ["to live", "to have lived", "to be lived", "to be living"],
            "correctAnswer": "to have lived"
        },
        ...
        ]

        Limit your response to JSON format only — no explanation or extra text.`;
};