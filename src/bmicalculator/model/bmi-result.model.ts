import { BMICategory } from './bmi-category.enum';
import { HealthRisk } from './health-risk.enum';

export interface BMIResult {
  bmi: number;
  category: BMICategory;
  healthRisk: HealthRisk;
}
