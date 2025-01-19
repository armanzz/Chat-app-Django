

exports.handler = async (event) => {
    try {
      // Extract numbers from event
      const { num1, num2 } = event;
      
      // Validate inputs
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('num1 and num2 must be numbers');
      }
  
      // Calculate sum
      const sum = num1 + num2;
  
      // Return result
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `The sum of ${num1} and ${num2} is ${sum}`,
          result: sum
        }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: error.message || 'An error occurred',
        }),
      };
    }
  };
  
