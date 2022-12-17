https://pragmaticstudio.com/tutorials/rails-session-cookies-for-api-authentication
https://github.com/ledermann/pingcrm/blob/master/app/controllers/application_controller.rb

https://codeql.github.com/codeql-query-help/ruby/rb-clear-text-storage-sensitive-data/

Hello all,

I have a controller, where I am creating a blog post using the authenticated user.
The authentication system doesn't use any fancy libraries like devise etc.
The code for creating post is below

```ruby
include Authentication
def create
    post = Post.new(post_params)
    post.creator = current_user
end
```

The `current_user` implementation is part of `Authentication` concern.

Below is the test code, that Im using

```ruby
  describe 'POST /create' do
    let(:valid_attributes) do
      {
        title: 'google x',
        category_id: 1,
      }
    end
    before do
      user = User.new(username: 'minion', password: 'donottellanyone')
      allow(controller).to receive(:current_user).and_return(user)
      @category = Category.create(name: 'IoT')
      Category.should_receive(:find).and_return(@category)
    end

    it 'should create post' do
      post posts_path,
           params: {
             project: valid_attributes,
           }

      expect(response).to redirect_to(posts_path)
    end
  end
```

The above test is failing with following error

```ruby
[{:creator=>"Creator must exist"}]
```

What's wrong with my `current_user` mocking ?
