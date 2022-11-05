require 'rails_helper'

RSpec.describe Project, type: :model do
   describe 'validation' do 
    subject do
        user = User.create(
            username:'minion',
            password: 'donottellanyone'
        )
        category = Category.create(name: "IoT")
        described_class.new(
            title: "Bubbla", 
            website: "bubbla.io", 
            description: "Social networking application", 
            end_date: Date.tomorrow, 
            funding_goal: 130.26, 
            details: "none as of now" ,
            creator: user,
            category: category,
        )
    end
    it 'is valid with valid attributes' do
        expect(subject).to be_valid
    end

    it 'is not valid with no title' do
        subject.title = nil
        expect(subject).to_not be_valid
    end
    
   end
end