import { Injectable } from '@angular/core';
import { AuthGuardGuard } from '../pages/auth-guard.guard';
@Injectable({
  providedIn: 'root'
})
export class FilldetailsService {

  constructor() { }
  
  courseDetails=[
    {
      id:1,
      courseName:"Web deplopment",
  courseDetails:"The coding and programming side of web site production as opposed to the web design side.",
  courseFee:10000,
  courseImg:"https://res.cloudinary.com/practicaldev/image/fetch/s--wqPjliMc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/3gjbeg830gnu43sxz7et.png"
    },
    {
      id:2,
      courseName:"Data structures and algorithms",
  courseDetails:"A data structure is a named location that can be used to store and organize data.",
  courseFee:10000,
  courseImg:"https://res.cloudinary.com/practicaldev/image/fetch/s--rjxO02ux--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w4qxi1gsnhuey77654qj.png"
    },
    {
      id:3,
      courseName:"Frontend Developer",
  courseDetails:" A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript allow users to access and interact with the site or app.",
  courseFee:10000,
  courseImg:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png"
    },
    {
      id:4,
      courseName:"Backend Developer",
  courseDetails:" A type of programmer who creates the logical back-end and core computational logic of a website, software or information system",
  courseFee:10000,
  courseImg:"https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg"
    }
  ]

  
}
