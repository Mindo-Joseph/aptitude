class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.references :exam, null: false, foreign_key: true
      t.string :text
      t.string :question_type
      t.json :options
      t.string :correct_option
      t.integer :points

      t.timestamps
    end
  end
end
