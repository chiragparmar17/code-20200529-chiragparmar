import { getData } from '../../services/data-feed.service';
import { PersonData } from '../../shared/models/person-data.interface';
import { BMICategory } from '../model/bmi-category.enum';
import { BMIResult } from '../model/bmi-result.model';
import { calculateBMI, findByCategory, getBMIResult, insert } from '../service/bmicalculator.service';

export function getBMIResults(): BMIResult[] {
  const persons: PersonData[] = getData();
  const bmiResults: BMIResult[] = [];

  for (let index = 0; index < persons.length; index = index + 1) {
    const bmi = calculateBMI(persons[index]);
    const bmiResult = getBMIResult(bmi, index + 1);
    bmiResults.push(bmiResult);
  }
  return bmiResults;
}

export async function fetchAndInsertResults() {
  const bmiResults: BMIResult[] = getBMIResults();
  console.log(bmiResults);
  await insert(bmiResults);
}

export async function fetchOverweightResults() {
  const bmiResults = await findByCategory(BMICategory.Overweight);
  return bmiResults;
}
