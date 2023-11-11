using AutoMapper;
using AutoMapper.QueryableExtensions;
using backend.DTOs;
using backend.Entities;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class UserRepository: IUserRepository {
  private readonly DataContext _context;
  private readonly IMapper _mapper;

  public UserRepository(DataContext context, IMapper mapper) {
    _context = context;
    _mapper = mapper;
  }

  public async Task<MemberDto> GetMemberAsync(string username) {
    return await _context.Users
      .Where(x => x.UserName == username)
      .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
      .SingleOrDefaultAsync();
  }

  public Task<IEnumerable<MemberDto>> GetMembersAsync()
  {
    throw new NotImplementedException();
  }

  public async Task<AppUser> GetUserByIdAsync(int id) {
    return await _context.Users.FindAsync(id);
  }
  
  public async Task<AppUser> GetUserByUsernameAsync(string username) {
    return await _context.Users
      .Include(p => p.Photos)
      .SingleOrDefaultAsync(u => u.UserName == username);
  }

  public async Task<IEnumerable<AppUser>> GetUsersAsync() {
    return await _context.Users
      .Include(p => p.Photos)
      .ToListAsync();
  }

  public async Task<bool> SaveAllAsync() {
    return await _context.SaveChangesAsync() > 0;
  }

  public void Update(AppUser user) {
    _context.Entry(user).State = EntityState.Modified;
  }
}