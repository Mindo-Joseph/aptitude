require 'rails_helper'

RSpec.feature "EmailPasswordAuthentications", type: :feature do


  def sign_up(email, password, password_confirmation)
    visit new_user_registration_path
    fill_in "Email", with: email
    fill_in "Password", with: password
    fill_in "Password confirmation", with: password_confirmation
    click_button "Sign up"
  end

  def sign_in(email, password)
    visit user_session_path
    fill_in "Email", with: email
    fill_in "Password", with: password
    click_button "Sign in"
  end

  let!(:user) {User.create(email: "ndirangu@apptitude.com", password: "myp@ssw0rd123") }

  scenario "user can login with valid email and password" do
    sign_up("test@user.com", "myp@ssw0rd123", "myp@ssw0rd123")
    expect(page).to have_text("Welcome! You have signed up successfully.")
  end

  scenario "user signing up with an existing email" do
    sign_up("test@user.com",  "myp@ssw0rd123", "myp@ssw0rd123")
    click_button "Log out"
    sign_up("test@user.com",  "myp@ssw0rd123", "myp@ssw0rd123")
    expect(page).to have_text("Email has already been taken")
  end

  scenario "user signing up with an invalid email" do
    sign_up("test", "myp@ssw0rd123", "myp@ssw0rd123")
    expect(page).to have_text("Email is invalid")
  end
  scenario "user signing up with an invalid password" do
    sign_up("test@user.com", "myp", "myp");
    expect(page).to have_text("Password is too short")
  end

  scenario "user signing up with an invalid password confirmation" do
    sign_up("XXXXXXXXXXXXX", "myp@ssw0rd123", "myp");
  end

  # Log In
  scenario "user can login with valid email and password" do
    sign_up("test@user.com",  "myp@ssw0rd123", "myp@ssw0rd123")
    click_button "Log out"
    sign_in("test@user.com", "myp@ssw0rd123")
    expect(page).to have_text("Signed in successfully.")
  end

  scenario "user can't login with invalid email" do
    sign_in("test", "myp@ssw0rd123")
    expect(page).to have_text("Invalid Email or password")

  end

  scenario "user can't login with invalid password" do
    sign_in("test@user.com", "myp")
    expect(page).to have_text("Invalid Email or password")
  end

  # Forgot Password

  scenario "user can reset password with valid email" do
    visit new_user_password_path
    fill_in "Email", with: "ndirangu@apptitude.com"
    click_button "Send password reset instructions"
    expect(page).to have_text("You will receive an email with instructions on how to reset your password in a few minutes.")

  end
end
