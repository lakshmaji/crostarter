module InertiaFlash
  extend ActiveSupport::Concern

  included do
    inertia_share flash: lambda {
      {
        message: flash.notice,
        alert: flash.alert,
      }
    }
  end
end
