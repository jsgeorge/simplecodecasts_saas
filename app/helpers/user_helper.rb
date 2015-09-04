module UserHelper
    def job_title_icon
            if @user.profile.job_title == "Developer"
                "<i class='fa fa-code'></i>".html_safe
            else if @user.profile.job_title == "Investor"
                "<i class='fa fa-dollar'></i>".html_safe
            else if @user.profile.job_title == "Entreprenur"
                "<i class='fa fa-lightbulb'></i>".html_safe
              end
            end
        end
    end
end