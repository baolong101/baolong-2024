// ! Sử dụng ":" để khai báo cores type: string, number, boolean, array, object

const myMess: string = 'xin chao moi nguoi'

const myAge: number = 20

const myMaried: boolean = false

const mySkill: string[] = ['html', 'css', 'js']

const myJob: string[] = ['student']

const myEducation = {
  school: 'fpoly',
  major: 'it',
  graduatedYear: 2024,
  GPA: 5.0,
  summary: 'good student'
}

type educationType = {
  school: string
  major: string
  graduatedYear: number
  GPA: number
  summary: string
}

const longEducation: educationType = {
  school: 'FPOLY',
  major: 'Information Technology',
  graduatedYear: 2023,
  GPA: 4.0,
  summary: 'Excellent student'
}
