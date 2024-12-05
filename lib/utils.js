export function validateFormData(formData) {
    const errors = {};
  
    // Validate title
    const title = formData.get("title");
    if (!title || title.trim() === "") {
      errors.title = "Title is required";
    }
  
    // Validate summary
    const summary = formData.get("summary");
    if (!summary || summary.trim() === "") {
      errors.summary = "Summary is required";
    }
  
    // Validate instructions
    const instructions = formData.get("instructions");
    if (!instructions || instructions.trim() === "") {
      errors.instructions = "Instructions are required";
    }
  
    // Validate image (optional, if it's required)
    // const image = formData.get("image");
    // if (image && !isValidImageUrl(image)) {
    //   errors.image = "Invalid image URL";
    // }
  
    // Validate creator (name)
    const creator = formData.get("name");
    if (!creator || creator.trim() === "") {
      errors.creator = "Creator name is required";
    }
  
    // Validate creator_email
    const creatorEmail = formData.get("email");
    if (!creatorEmail || !isValidEmail(creatorEmail)) {
      errors.creator_email = "Valid email is required";
    }
  
    return errors;
  }
  
  // Helper function to validate an email
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate image URL
  function isValidImageUrl(url) {
    const imageRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
    return imageRegex.test(url);
  }
  