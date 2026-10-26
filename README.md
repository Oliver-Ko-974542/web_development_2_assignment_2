## Contribution

- Oliver: app/layout.tsx, Navbar, Footer, StatsPanel, and the overall look of the page
- Yance: data/students.ts, StudentList and StudentCard
- Louis: StudentPortal (the state, Remove, Clear all and the search filter), SearchBox and AddStudent

## Deployed Link

https://web-development-2-assignment-2.vercel.app/

## Test Checklist

1. Open the app. Every student from your data file shows, and the three numbers match your data. ✅Pass
2. Click Show details on one card, then click it again. That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. ✅Pass
3. Remove a grade 12 student. The student is gone, and both Students and Graduating drop by one. ✅Pass
4. Type a last name in capitals, such as AHMED, into the search box. Then empty the box. Only the matching student shows. When the box is empty, every student is back. ✅Pass
5. Search for zzz. The no-students message shows. The three numbers do not change: search changes what is shown, not the list. ✅Pass
6. Leave the first name empty, fill in the last name, and click Add student. Nothing is added. ✅Pass
7. Fill in all four inputs and click Add student. The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. ✅Pass
8. Click Clear all. The no-students message shows, and all three numbers are 0. ✅Pass
9. Narrow the browser to phone width (DevTools device toolbar). The cards stack in one column, and nothing scrolls sideways. ✅Pass
10. Click each link in the navbar. The page jumps to that section. ✅Pass
