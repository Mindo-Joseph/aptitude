class CreateAttempts < ActiveRecord::Migration[7.0]
  def change
    create_table :attempts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :exam, null: false, foreign_key: true
      t.integer :start_time
      t.integer :end_time
      t.integer :score
      t.string :result

      t.timestamps
    end
  end
end
