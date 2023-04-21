# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# create sample exams
1.times do |h|
  user = User.create!(
    email: "testuser92#{h}@apptitude.com",
    password: "password",
    password_confirmation: "password"
  )
end


5.times do |i|
  exam = Exam.create!(
    title: "Exam #{i}",
    description: "This is a sample exam",
    public: true,
    price: 190,
    pass_percentage: 70,
    time_limit: 60,
    user_id: User.first.id
  )

  10.times do |j|
    question = Question.create!(
      exam_id: exam.id,
      text: "Question #{j}",
      question_type: "multiple_choice",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correct_option: "Option 1",
      points: 10

    )
  end

  3.times do |k|
    attempt = Attempt.create!(
      exam_id: exam.id,
      user_id: User.first.id,
      start_time: Time.now,
      end_time: Time.now,
      score: 100,
      result: "pass"
    )
  end
end
