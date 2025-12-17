### My Task : 

## Problem: Build a Searchable & Filterable User List

You are given a list of users from an API.  
Your task is to build a small frontend component that meets the following requirements.

### Requirements

1. Fetch users from this API:
   https://jsonplaceholder.typicode.com/users

2. Display the following details for each user:
   - Name
   - Email
   - City (from address)

3. Add:
   - A search input that filters users by name (case-insensitive)
   - A dropdown filter to filter users by city
   - A clear filters button

4. Handle the following UI states:
   - Loading state
   - Error state (API request failure)
   - Empty results state

5. Performance considerations:
   - Avoid unnecessary re-filtering on every keystroke
   - Prevent unnecessary re-renders

### Constraints

- Use React
- Functional components only
- Hooks only
- No external UI libraries

### Bonus (Optional)

- Debounce the search input
- Highlight matched search text
- Add accessibility support (keyboard navigation, ARIA)
- Write basic unit tests

### Evaluation Criteria

- Code quality and readability
- State management
- API handling
- Performance optimization
- User experience