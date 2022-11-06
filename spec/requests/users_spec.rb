require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /users/new", inertia: true do
    it 'returns with 200' do
        get new_user_path
        expect(response).to have_http_status(200)
    end

    it 'render correct react component' do 
        get new_user_path
        expect_inertia.to render_component 'users/SignUp'
    end

    it 'it has a component name' do 
        get new_user_path
        expect(inertia.component).to eq 'users/SignUp'
    end
  end

  describe "POST /users", inertia: true do
    context 'with valid parameters' do
      let(:valid_attributes) do
        {
          username: "lakshmaji",
          password: "donottellanyone",
          password_confirmation: "donottellanyone",
        }
      end

      it 'redirects to root_path on successfull creation' do
        valid_attributes
          post users_path, params: {
            user: valid_attributes
          }
          expect(response).to redirect_to(root_path)
      end

      it 'has 1 new user record' do
        valid_attributes
          post users_path, params: {
            user: valid_attributes
          }
          expect(User.count).to eq(1)
      end
    end

    context 'with invalid parameters' do
      let(:valid_attributes) do
        {
          username: "lakshmaji",
          password: "donottellanyone",
          password_confirmation: "donottellanyone",
        }
      end

      it 'returns 302 status code' do
        valid_attributes[:password] = nil
        post users_path, params: {
          user: valid_attributes
        }
        expect(response.status).to eq 302
      end

      it 'redirects to users/new on missing password' do
          valid_attributes[:password] = nil
          post users_path, params: {
            user: valid_attributes
          }
          expect(response).to redirect_to(new_user_path)
      end

      it 'has no new user record with missing valid attributes' do
          valid_attributes[:password] = nil
          post users_path, params: {
            user: valid_attributes
          }
          expect(User.count).to eq(0)
      end

      it 'returns errors when password is missing' do
        valid_attributes[:password] = nil
        post users_path, params: {
          user: valid_attributes
        }
        expect(session[:inertia_errors]).to include({ :password => 'Password can\'t be blank' })
      end


      it 'returns errors when username is missing' do
        valid_attributes[:username] = nil
        post users_path, params: {
          user: valid_attributes
        }
        expect(session[:inertia_errors]).to include({ :username => 'Username can\'t be blank' })
      end

      it 'returns errors when password confirmation doesnot match password field' do
        valid_attributes[:password_confirmation] = "456"
        post users_path, params: {
          user: valid_attributes
        }
        expect(session[:inertia_errors]).to include({ :password_confirmation => 'Password confirmation doesn\'t match Password' })
      end

    end

    # it 'render correct react component' do 
    #     post users_path
    #     expect_inertia.to render_component 'users/SignUp'
    # end

    # it 'it has a component name' do 
    #     post users_path
    #     expect(inertia.component).to eq 'users/SignUp'
    # end
  end
end
