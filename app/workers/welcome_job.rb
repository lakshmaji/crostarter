class WelcomeJob
  include Sidekiq::Job

  def perform(*_args)
    # Do something
    puts _args
  end
end
