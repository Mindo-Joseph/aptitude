RSpec.feature "Social Authentication", type: :feature do

  scenario "User signs in with Google do" do
    visit new_user_registration_path
    click_link "Sign in with Google"
    expect(page).to have_content("Successfully authenticated from Google account.")
  end
end
