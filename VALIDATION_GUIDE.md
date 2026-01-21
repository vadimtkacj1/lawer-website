# Form Validation Guide

This document describes the validation rules implemented in the contact form.

## Overview

The contact form includes both **client-side** and **server-side** validation to ensure data quality and security.

## Validation Rules

### Name Field (שם מלא)

**Required:** Yes (marked with `*`)

| Rule | Description | Error Message (Hebrew) |
|------|-------------|----------------------|
| **Required** | Field cannot be empty | `שם מלא הוא שדה חובה` |
| **Minimum Length** | Must be at least 2 characters | `שם חייב להכיל לפחות 2 תווים` |

**Examples:**
- ✅ `אבי כהן`
- ✅ `David`
- ❌ `` (empty)
- ❌ `א` (too short)

---

### Phone Field (מספר טלפון)

**Required:** Yes (marked with `*`)

| Rule | Description | Error Message (Hebrew) |
|------|-------------|----------------------|
| **Required** | Field cannot be empty | `מספר טלפון הוא שדה חובה` |
| **Format** | Must be a valid Israeli phone number | `מספר טלפון לא תקין` |

**Accepted Formats:**

The validator accepts Israeli mobile numbers in various formats:

1. **Local format (with leading 0):**
   - `054-123-4567`
   - `0541234567`
   - `054 123 4567`

2. **International format (with country code):**
   - `+972541234567`
   - `+972-54-123-4567`
   - `972541234567`

3. **With parentheses:**
   - `054-(123)-4567`
   - `(054) 123-4567`

**Validation Rules:**
- Must start with `5` (Israeli mobile numbers)
- Must have exactly 9 digits after the leading `5`
- Country code `+972` or `972` is optional
- Leading `0` is optional when country code is provided
- Spaces, dashes `(-)`, and parentheses `()` are automatically removed during validation

**Examples:**
- ✅ `054-123-4567`
- ✅ `0541234567`
- ✅ `+972541234567`
- ✅ `972-54-123-4567`
- ❌ `123456789` (doesn't start with 5)
- ❌ `054-123-456` (too short)
- ❌ `054-123-45678` (too long)
- ❌ `02-123-4567` (landline, not mobile)

---

## Client-Side Validation

**Location:** `src/components/Contact/Contact.tsx`

### How It Works

1. **Real-time validation:**
   - Validation occurs when the user leaves a field (onBlur)
   - Errors are shown immediately after the field loses focus
   - Errors update in real-time as the user types (if field was previously touched)

2. **Visual feedback:**
   - Invalid fields have a **red border**
   - Error messages appear below the field in **red text**
   - Valid fields have the default transparent border

3. **Submit validation:**
   - All fields are validated when the form is submitted
   - Form submission is blocked if any field is invalid
   - All errors are displayed to the user

### User Experience Features

- **Progressive disclosure:** Errors only appear after user interaction
- **Immediate feedback:** Errors clear as user corrects them
- **Clear indicators:** Red borders and messages make errors obvious
- **Accessibility:** ARIA attributes for screen readers (`aria-invalid`, `aria-describedby`)

---

## Server-Side Validation

**Location:** `src/app/api/contact/route.ts`

### Why Server-Side?

Even with client-side validation, server-side validation is crucial because:
- Users can bypass client-side validation
- Direct API calls can be made without the form
- Additional security layer

### Validation Steps

1. **Environment check:**
   ```typescript
   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
     return 500 error
   }
   ```

2. **Name validation:**
   ```typescript
   - Check if name exists and is a string
   - Check if name is not empty (after trim)
   - Check if name length >= 2 characters
   ```

3. **Phone validation:**
   ```typescript
   - Check if phone exists and is a string
   - Check if phone is not empty (after trim)
   - Clean phone (remove spaces, dashes, parentheses)
   - Validate against Israeli phone regex: /^(\+?972|0)?([5]\d{8})$/
   ```

### Error Responses

All validation errors return:
- **Status Code:** `400 Bad Request`
- **Error Message:** Hebrew error message matching client-side

Example:
```json
{
  "error": "מספר טלפון לא תקין"
}
```

---

## Testing Validation

### Test Cases for Name

```javascript
// Should pass
"אבי כהן"
"David Cohen"
"משה"
"ab"

// Should fail
""          // Empty
" "         // Whitespace only
"א"         // Too short (1 char)
```

### Test Cases for Phone

```javascript
// Should pass
"054-123-4567"
"0541234567"
"+972541234567"
"972541234567"
"054 123 4567"
"(054)123-4567"

// Should fail
""              // Empty
"123456789"     // Doesn't start with 5
"054-123"       // Too short
"02-1234567"    // Landline (starts with 0)
"054-123-456789" // Too long
"abcdefghij"    // Not a number
```

---

## Code Examples

### Frontend Validation Function

```typescript
const validatePhone = (phone: string): string => {
  if (!phone.trim()) {
    return "מספר טלפון הוא שדה חובה";
  }

  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;

  if (!phoneRegex.test(cleanPhone)) {
    return "מספר טלפון לא תקין";
  }

  return "";
};
```

### Backend Validation

```typescript
// Israeli phone number validation
const cleanPhone = phone.replace(/[\s\-()]/g, "");
const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;

if (!phoneRegex.test(cleanPhone)) {
  return NextResponse.json(
    { error: "מספר טלפון לא תקין" },
    { status: 400 }
  );
}
```

---

## Customizing Validation

### Adding New Validation Rules

To add more validation rules (e.g., email field):

1. **Update state:**
   ```typescript
   const [formData, setFormData] = useState({
     name: "",
     phone: "",
     email: "" // New field
   });

   const [errors, setErrors] = useState({
     name: "",
     phone: "",
     email: "" // New field
   });
   ```

2. **Create validation function:**
   ```typescript
   const validateEmail = (email: string): string => {
     if (!email.trim()) {
       return "אימייל הוא שדה חובה";
     }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
       return "כתובת אימייל לא תקינה";
     }

     return "";
   };
   ```

3. **Add to form submit:**
   ```typescript
   const emailError = validateEmail(formData.email);
   setErrors({ name: nameError, phone: phoneError, email: emailError });

   if (nameError || phoneError || emailError) {
     return;
   }
   ```

4. **Update backend validation** in `src/app/api/contact/route.ts`

---

## Accessibility

The form follows accessibility best practices:

- ✅ Required fields marked with `*`
- ✅ ARIA attributes for screen readers
- ✅ Error messages associated with inputs via `aria-describedby`
- ✅ Invalid state communicated via `aria-invalid`
- ✅ High contrast error colors (red on white)
- ✅ RTL support for Hebrew text
- ✅ Keyboard navigation support

---

## Browser Compatibility

The validation works in all modern browsers:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** The `noValidate` attribute on the form disables native HTML5 validation to use our custom validation instead.

---

## Security Considerations

1. **XSS Prevention:**
   - User input is never rendered as HTML
   - Email templates use text interpolation only

2. **Injection Prevention:**
   - Phone regex prevents special characters
   - Name length limits prevent abuse

3. **Rate Limiting:**
   - Consider adding rate limiting to the API endpoint
   - Prevents spam and abuse

4. **Data Sanitization:**
   - `.trim()` removes whitespace
   - Phone cleaning removes formatting characters
   - Type checking ensures correct data types

---

## Troubleshooting

### Validation Not Working?

1. **Check browser console** for JavaScript errors
2. **Verify form state** - use React DevTools
3. **Check API response** in Network tab
4. **Verify environment variables** are set

### Phone Validation Too Strict?

To accept landline numbers or other formats, modify the regex:

```typescript
// Accept both mobile (5X) and landline (02, 03, etc.)
const phoneRegex = /^(\+?972|0)?([2-9]\d{7,8})$/;
```

### Need Different Phone Format?

For international phone numbers:

```typescript
// International format (any country)
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
```

---

## Future Enhancements

Potential improvements:

- [ ] Add email field validation
- [ ] Add CAPTCHA/reCAPTCHA
- [ ] Add honeypot field for spam prevention
- [ ] Implement rate limiting
- [ ] Add success message auto-hide (after 5 seconds)
- [ ] Add animation to error messages
- [ ] Add field character counter
- [ ] Support for international phone numbers
- [ ] Add phone number auto-formatting as user types

---

## Related Files

- [src/components/Contact/Contact.tsx](src/components/Contact/Contact.tsx) - Frontend form component
- [src/app/api/contact/route.ts](src/app/api/contact/route.ts) - Backend API endpoint
- [EMAIL_SETUP_INSTRUCTIONS.md](EMAIL_SETUP_INSTRUCTIONS.md) - Email setup guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
