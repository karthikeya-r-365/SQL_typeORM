export function isMobileNumber(input: string): boolean {
    // Regular expression to match common mobile number formats
    const regex = /^(?:\+\d{1,3}[- ]?)?\d{10}$/;
  
    return regex.test(input);
}

export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }