module InertiaFlash
    extend ActiveSupport::Concern

    included do
        inertia_share flash: -> {
            {
                message: flash.notice,
                alert: flash.alert
            }
        }
    end
end