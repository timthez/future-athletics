class Organization < ApplicationRecord
  def self.types
    {
      "UNIVERSITY": "University",
      "MIDDLE_SCHOOL": "Middle School",
      "HIGH_SCHOOL": "High School",
      "RUNNING_CLUB": "Running Club",
      "PROFESSIONAL": "Professional"
    }
  end
end
