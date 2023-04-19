RSpec.feature "Social Authentication", type: :feature do

  def mock_google_auth
    OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({
      provider: "google_oauth2",
      uid: ENV["fake_google_uid"],
      info: {
        name: "John Doe",
        email: "test@apptitude.com",
      },
      credentials: {
        token: ENV["fake_google_token"]
      }
    })
  end

  scenario "User signs up with Google do" do
    mock_google_auth
    visit new_user_registration_path
    click_link "Sign in with Google"
    expect(page).to have_content("Successfully authenticated from Google account.")
  end
end
