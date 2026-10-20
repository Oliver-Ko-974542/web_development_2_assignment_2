export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 9, average: 84 },
  { id: 2, firstName: "Noah", lastName: "Kim", grade: 10, average: 76 },
  { id: 3, firstName: "Maya", lastName: "Singh", grade: 11, average: 91 },
  { id: 4, firstName: "Liam", lastName: "Chen", grade: 12, average: 79 },
  { id: 5, firstName: "Olivia", lastName: "Patel", grade: 12, average: 88 },
  { id: 6, firstName: "Ethan", lastName: "Garcia", grade: 9, average: 72 },
  { id: 7, firstName: "Ava", lastName: "Brown", grade: 10, average: 81 },
  { id: 8, firstName: "Lucas", lastName: "Wilson", grade: 11, average: 68 },
];
