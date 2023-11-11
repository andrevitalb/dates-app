using backend.DTOs;
using backend.Entities;

namespace backend.Interfaces;

public interface IUserRepository {
  Task<MemberDto> GetMemberAsync(string username);
  Task<IEnumerable<MemberDto>> GetMembersAsync();
  Task<AppUser> GetUserByIdAsync(int id);
  Task<AppUser> GetUserByUsernameAsync(string username);
  Task<IEnumerable<AppUser>> GetUsersAsync();
  Task<bool> SaveAllAsync();
  void Update(AppUser user);
}