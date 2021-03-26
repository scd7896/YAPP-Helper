export interface RecruitModel {
  isRecruiting: boolean;
  startDay: string;
  lastDay: string;
  generation: number;
  URL: string;
}
export interface RecruitState extends RecruitModel {
  isLoaded: boolean;
  isError: false;
}
