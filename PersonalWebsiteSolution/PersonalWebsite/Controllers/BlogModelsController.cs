using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalWebsite.Data;
using PersonalWebsite.Models;

namespace PersonalWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BlogModelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BlogModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/BlogModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogModel>>> GetBlogModel()
        {
            return await _context.BlogModel.ToListAsync();
        }

        // GET: api/BlogModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogModel>> GetBlogModel(int id)
        {
            var blogModel = await _context.BlogModel.FindAsync(id);

            if (blogModel == null)
            {
                return NotFound();
            }

            return blogModel;
        }

        // PUT: api/BlogModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogModel(int id, BlogModel blogModel)
        {
            if (id != blogModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogModels
        [HttpPost]
        public async Task<ActionResult<BlogModel>> PostBlogModel(BlogModel blogModel)
        {
            _context.BlogModel.Add(blogModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogModel", new { id = blogModel.Id }, blogModel);
        }

        // DELETE: api/BlogModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BlogModel>> DeleteBlogModel(int id)
        {
            var blogModel = await _context.BlogModel.FindAsync(id);
            if (blogModel == null)
            {
                return NotFound();
            }

            _context.BlogModel.Remove(blogModel);
            await _context.SaveChangesAsync();

            return blogModel;
        }

        private bool BlogModelExists(int id)
        {
            return _context.BlogModel.Any(e => e.Id == id);
        }
    }
}
