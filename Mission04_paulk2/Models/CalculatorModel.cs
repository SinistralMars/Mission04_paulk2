using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_paulk2.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        [Required]
        public int Assignments { get; set; }

        [Range(0, 100)]
        [Required]
        public int GroupProjects { get; set; }

        [Range(0, 100)]
        [Required]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        [Required]
        public int Midterm { get; set; }

        [Range(0, 100)]
        [Required]
        public int Final { get; set; }

        [Range(0, 100)]
        [Required]
        public int Intex { get; set; }

        public string LetterGrade { get; set; }
    }
}
