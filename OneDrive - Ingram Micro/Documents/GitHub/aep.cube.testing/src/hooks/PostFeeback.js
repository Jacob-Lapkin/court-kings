import { BasePath } from "./BasePath";

const postFeedback = async (parentProduct, relationshipProduct, comment, feedback) => {
    try {
      const response = await fetch(`${BasePath}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parentProduct,
          relationshipProduct,
          comment,
          feedback
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  