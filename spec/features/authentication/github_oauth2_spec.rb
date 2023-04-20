require 'rails_helper'
RSpec.feature "User can authenticate with github", type: :feature do
  def mock_github_auth
    OmniAuth.config.mock_auth[:github] = OmniAuth::AuthHash.new({
      provider: 'github',
      uid: ENV["fake_github_uid"],
      info:{
        name: "Fake User",
        email: "testgithub@apptitude.com"
      },
      credentials:{
        token: ENV["fake_github_token"]
      }
    })

  end

  scenario "User logs in with github" do
    mock_github_auth
    visit new_user_registration_path
    click_link "Sign in with Github"
    expect(page).to have_content("Successfully authenticated from Github account")
  end

end
