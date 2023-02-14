class AttrAccessorObject
  def self.my_attr_accessor(*names)

    names.each do |name| # iterate through the name array

      define_method(name) do # define method creates a method with the name passed into it
        instance_variable_get("@#{name}") # gets that instance variable
      end

      define_method("#{name}=") do |value| # creating method that will set the instance variable to something.
        instance_variable_set("@#{name}", value) # setting value
      end

    end
    
  end
end
