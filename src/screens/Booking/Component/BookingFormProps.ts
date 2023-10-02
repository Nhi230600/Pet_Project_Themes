export interface BookingFormProps {
    title: string;
    options: [Option[], Option[]];
    timeLabel: string;
    notePlaceholder: string;
  }
  
  export interface Option {
    value: string;
    label: string;
  }