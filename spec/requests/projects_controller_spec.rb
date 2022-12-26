# frozen_string_literal: true

require 'rails_helper'
require 'inertia_rails/rspec'

RSpec.describe ProjectsController, type: :request do
  describe 'GET /index', inertia: true do
    it 'returns the projects page' do
      get projects_path
      expect(response).to have_http_status(:ok)
    end

    it 'render correct react component' do
      get projects_path
      expect_inertia.to render_component 'projects/Projects'
    end

    it 'has a component name' do
      get projects_path
      expect(inertia.component).to eq 'projects/Projects'
    end

    it 'has a valid empty props' do
      get projects_path
      expect_inertia.to include_props({ projects: [], flash: { message: nil, alert: nil } })
    end
  end

  describe 'POST /create', inertia: true do
    let(:valid_attributes) do
      file = fixture_file_upload('spec/fixtures/files/project.jpeg', 'image/jpeg')
      {
        title: 'google x',
        category_id: 1,
        end_date: '12/02/2022',
        funding_goal: 2000,
        avatar: file,
      }
    end
    let(:user) { User.create(username: 'minion', password: 'donottellanyone') }
    let(:category) { Category.create(name: 'IoT') }

    before do
      # user = build(:user)
      # allow(controller).to receive(:current_user).and_return(user)
      # controller.stub(:current_user).and_return(user)

      allow(Category).to receive(:find).and_return(category)
    end

    # before do
    # sign_in
    # end

    it 'redirects to projects_path on successfull creation' do
      sign_in
      # allow_any_instance_of(ActionDispatch::Request).to receive(:session).and_return({ current_user_id: '11', })

      post projects_path,
           params: {
             project: valid_attributes,
           }
      # expect(session[:inertia_errors]).to be_nil

      expect(response).to redirect_to(root_path)
      # post_count = Post.count
      # expect(Post.count).to eq(post_count + 1)
    end

    it 'updates count on database, when project is created' do
      project_count = Project.count

      sign_in

      post projects_path,
           params: {
             project: valid_attributes,
           }

      # expect(response).to redirect_to(projects_path)
      # post_count = Post.count
      expect(Project.count).to eq(project_count + 1)
    end

    it 'has no errors for valid input' do
      sign_in
      post projects_path,
           params: {
             project: valid_attributes,
           }
      expect(session[:inertia_errors]).to be_nil
    end
  end
end
