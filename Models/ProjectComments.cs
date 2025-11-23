using System;
using System.ComponentModel.DataAnnotations;

namespace COMP2139_ICE.Areas.ProjectManagement.Models
{
    public class ProjectComment
    {
        [Key]
        public int CommentId { get; set; }

        [Required]
        [StringLength(500, ErrorMessage = "Comment cannot exceed 500 characters.")]
        public string Content { get; set; }

        [Required]
        public int ProjectId { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        // Navigation property
        public Project Project { get; set; }
    }
}