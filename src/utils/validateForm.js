export default function validateForm(data) {
    const requiredFields = ['fullName', 'mobile', 'pincode', 'address', 'cityState'];
    return requiredFields.every((field) => data[field] && data[field].trim() !== '');
  }
  