import { getData } from '../../services/data-feed.service';
import { PersonData } from '../../shared/models/person-data.interface';
import { BMIResult } from '../model/bmi-result.model';
import { calculateBMI, getBMIResult } from '../service/bmicalculator.service';

export function getBMIResults(): BMIResult[] {
  const persons: PersonData[] = getData();
  const bmiResults: BMIResult[] = [];

  for (let index = 0; index < persons.length; index = index + 1) {
    const bmi = calculateBMI(persons[index]);
    const bmiResult = getBMIResult(bmi);
    bmiResults.push(bmiResult);
  }
  return bmiResults;
}
