# Out-of-Pocket Feature - Testing & Deployment Checklist

## Pre-Deployment Verification

### Backend Setup
- [ ] MongoDB is running and connected
- [ ] Node.js environment variables are set:
  - [ ] `MONGODB_URI` configured
  - [ ] `PORT` set (default 5000)
  - [ ] Google Gemini API key configured in `geminiClient.js`
- [ ] All new backend files created:
  - [ ] `backend/controllers/oopCalculatorController.js` exists
  - [ ] `backend/models/Policy.js` updated with costStructure
  - [ ] `backend/controllers/analyzeController.js` has extractCostStructure function
  - [ ] `backend/routes/policyRoutes.js` includes /calculate-oop route

### Frontend Setup
- [ ] React app is using latest dependencies
- [ ] All new frontend files created:
  - [ ] `frontend/src/components/OutOfPocketCalculator.jsx` exists
  - [ ] `frontend/src/pages/ResultPage.jsx` updated with OOP tab
  - [ ] `frontend/src/services/api.js` has calculateOOPCost function
- [ ] VITE_API_BASE_URL environment variable set
- [ ] Framer Motion and react-hot-toast installed (check package.json)

### Git & Version Control
- [ ] All files committed
- [ ] No merge conflicts
- [ ] Branch merged to main/master

---

## Unit Testing

### Backend Controller Tests

#### Test 1: Valid Calculation
```bash
POST /api/policy/calculate-oop
Body: {
  "policyId": "[VALID_ID]",
  "medicalCost": 5000,
  "serviceType": "hospital",
  "scenarioDescription": "3-day stay",
  "language": "en"
}
Expected: 200 OK with calculation object
✓ Pass / ✗ Fail
```

#### Test 2: Missing Required Fields
```bash
POST /api/policy/calculate-oop
Body: { "policyId": "[VALID_ID]" }
Expected: 400 Bad Request
✓ Pass / ✗ Fail
```

#### Test 3: Invalid Policy ID
```bash
POST /api/policy/calculate-oop
Body: {
  "policyId": "invalid-id",
  "medicalCost": 5000
}
Expected: 404 Not Found
✓ Pass / ✗ Fail
```

#### Test 4: Negative Medical Cost
```bash
POST /api/policy/calculate-oop
Body: {
  "policyId": "[VALID_ID]",
  "medicalCost": -100
}
Expected: 400 Bad Request
✓ Pass / ✗ Fail
```

### Frontend Component Tests

#### Test 1: Component Renders
- [ ] OutOfPocketCalculator component loads without errors
- [ ] All input fields visible (medical cost, service type, scenario)
- [ ] Calculate button is clickable

#### Test 2: Input Validation
- [ ] Entering non-numeric cost shows error
- [ ] Negative cost shows error
- [ ] Empty cost shows error when calculating
- [ ] Zero cost shows error

#### Test 3: Service Type Selection
- [ ] All 9 service types are clickable
- [ ] Selection is visually highlighted
- [ ] Selection persists when calculating

#### Test 4: Results Display
- [ ] Cost visualization appears after calculation
- [ ] Three main cards display (Total, You Pay, Insurance Pays)
- [ ] Stacked bar chart appears
- [ ] Breakdown steps display
- [ ] All amounts are correctly formatted

#### Test 5: Bilingual Support
- [ ] English labels display correctly in English mode
- [ ] Hindi labels display correctly in Hindi mode
- [ ] AI explanation comes back in correct language

---

## Integration Testing

### End-to-End Flow Test 1: Complete Scenario
```
1. Upload policy PDF with cost information
   ✓ Policy uploaded successfully
   ✓ Analysis completed

2. Navigate to ResultPage
   ✓ All tabs visible including 💰 Out-of-Pocket

3. Click Out-of-Pocket tab
   ✓ Component loads without errors

4. Enter scenario:
   - Medical Cost: $5,000
   - Service Type: Hospital Stay
   - Scenario: "3-day hospitalization"
   ✓ All inputs accepted

5. Click Calculate
   ✓ Loading state shows
   ✓ Results appear within 3 seconds

6. Verify results
   ✓ Total cost matches input ($5,000)
   ✓ User + Insurance amounts sum to total
   ✓ Percentages calculated correctly
   ✓ Breakdown steps appear
   ✓ AI explanation displays
   ✓ Tips are relevant

7. Change language to Hindi
   ✓ UI updates to Hindi
   ✓ Explanation in Hindi (Devanagari)
   ✓ Tips in Hindi language
```

### End-to-End Flow Test 2: Different Service Types
```
Test with each service type:
- [ ] Doctor Visit
- [ ] Hospital Stay
- [ ] Surgery
- [ ] Preventive Care
- [ ] Dental
- [ ] Mental Health
- [ ] Prescription Medication
- [ ] Urgent Care
- [ ] Emergency

Verify:
✓ Component handles all types
✓ Calculations vary appropriately
✓ Correct emoji displays for each
```

### End-to-End Flow Test 3: Edge Cases
```
Test Case: Cost exceeds coverage limit
- [ ] Component detects limit exceeded
- [ ] Shows "Limit Exceeded" warning
- [ ] Explains excess amount

Test Case: Cost below deductible
- [ ] Shows user pays full amount
- [ ] Insurance pays $0
- [ ] Explanation is clear

Test Case: Very high medical cost
- [ ] Calculation handles large numbers
- [ ] Out-of-pocket maximum is enforced
- [ ] Shows savings from OOP max
```

---

## API Testing

### Test Cost Extraction in Analyze
```bash
POST /api/policy/analyze
FormData: policy.pdf
Response should include:
{
  "success": true,
  "costStructure": {
    "deductible": { "individual": 1500, ... },
    "copay": [...],
    "coinsurance": {...},
    ...
  }
}
✓ Pass / ✗ Fail
```

### Test Calculate OOP Endpoint
```bash
POST /api/policy/calculate-oop
Response should include ALL of:
- calculation.totalMedicalCost
- calculation.userPays
- calculation.insurancePays
- calculation.percentage
- calculation.breakdown[...]
- explanation.simpleExplanation
- explanation.breakdown[...]
- explanation.tips[...]
- costStructure

✓ Pass / ✗ Fail
```

---

## Performance Testing

- [ ] Page load time < 2 seconds
- [ ] Calculation time < 3 seconds
- [ ] Animations smooth (60fps) on:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browsers
- [ ] No console errors
- [ ] Memory usage stable (no leaks)

---

## Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

For each browser:
- [ ] Component renders correctly
- [ ] Animations play smoothly
- [ ] All inputs work
- [ ] Results display properly

---

## Accessibility Testing

- [ ] Tab navigation works
- [ ] Form labels associated with inputs
- [ ] Color contrast adequate (WCAG AA)
- [ ] Aria labels present where needed
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Keyboard navigation complete

---

## Security Testing

- [ ] Input validation works (no SQL injection)
- [ ] Policy ID validation strict (ObjectId format)
- [ ] No sensitive data in logs
- [ ] API rate limiting works (if implemented)
- [ ] CORS properly configured
- [ ] No XSS vulnerabilities

---

## Bilingual Testing

### English Mode
- [ ] All labels in English
- [ ] Explanations in English
- [ ] Tips in English
- [ ] No translation errors

### Hindi Mode
- [ ] All labels in Devanagari script
- [ ] Explanations in Devanagari script (not transliterated)
- [ ] Tips in Devanagari script
- [ ] Special characters display correctly
- [ ] Text alignment appropriate for RTL

---

## Documentation Verification

- [ ] FEATURE_OOP_IMPLEMENTATION.md is accurate
- [ ] OOP_QUICK_START.md covers all features
- [ ] Code comments are clear
- [ ] API documentation complete
- [ ] Deployment instructions clear

---

## Regression Testing

Verify existing features still work:
- [ ] Policy upload still works
- [ ] Policy analysis still works
- [ ] Other tabs still work (coverage, exclusions, terms, simulator, chat)
- [ ] Language switching still works
- [ ] Back button navigation works

---

## Performance Baseline (Before & After)

| Metric | Before | After | Status |
|--------|--------|-------|--------|
| Page load time | ___ ms | ___ ms | ✓ / ✗ |
| Memory usage | ___ MB | ___ MB | ✓ / ✗ |
| API response time | ___ ms | ___ ms | ✓ / ✗ |
| Component render time | ___ ms | ___ ms | ✓ / ✗ |

---

## Sign-Off

- [ ] All tests passed
- [ ] No blocking issues
- [ ] Performance acceptable
- [ ] Documentation complete
- [ ] Team approved

### Approved By
- QA Lead: _________________ Date: _______
- Tech Lead: _________________ Date: _______
- Product Owner: _________________ Date: _______

---

## Deployment Steps

1. [ ] Merge feature branch to main
2. [ ] Tag version (e.g., v1.2.0)
3. [ ] Deploy backend
   - [ ] Run migrations (if any)
   - [ ] Verify API endpoints
   - [ ] Check logs for errors
4. [ ] Deploy frontend
   - [ ] Run build: `npm run build`
   - [ ] Verify build output
   - [ ] Deploy to hosting
5. [ ] Smoke tests on production
   - [ ] Upload test policy
   - [ ] Navigate to OOP tab
   - [ ] Run test calculation
   - [ ] Verify results
6. [ ] Monitor for errors
   - [ ] Check error logs
   - [ ] Monitor API response times
   - [ ] Check user feedback

---

## Post-Deployment Monitoring

- [ ] Monitor error rate (target: < 0.1%)
- [ ] Check API performance (p95 < 3s)
- [ ] Monitor user engagement (# calculations)
- [ ] Collect user feedback
- [ ] Document issues for next sprint

---

## Rollback Plan

If critical issues found:
1. [ ] Disable OOP tab (set to hidden in code)
2. [ ] Revert to previous version
3. [ ] Analyze issue in non-prod environment
4. [ ] Fix and re-test
5. [ ] Re-deploy when ready

---

**Checklist Version**: 1.0
**Last Updated**: April 2026
**Owner**: Development Team
