class CreateExams < ActiveRecord::Migration[7.0]
  def change
    create_table :exams do |t|
      t.string :title
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.boolean :public
      t.float :price
      t.float :pass_percentage
      t.integer :time_limit

      t.timestamps
    end
  end
end
