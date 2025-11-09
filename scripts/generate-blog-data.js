const fs = require('fs');
const path = require('path');

// 读取博客目录
const blogDir = path.join(__dirname, '../blog');

// 读取博客文章的 frontmatter
function readBlogPost(postDir) {
  const indexPath = path.join(postDir, 'index.md');
  const mdxPath = path.join(postDir, 'index.mdx');

  let filePath = null;
  if (fs.existsSync(indexPath)) {
    filePath = indexPath;
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  }

  if (!filePath) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    return null;
  }

  const frontmatter = frontmatterMatch[1];
  const data = {};

  // 解析 frontmatter
  frontmatter.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length > 0) {
      const value = rest.join(':').trim();

      // 处理不同的数据类型
      if (value.startsWith('"') && value.endsWith('"')) {
        data[key.trim()] = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // 处理数组
        data[key.trim()] = value.slice(1, -1).split(',').map(item =>
          item.trim().replace(/['"]/g, '')
        );
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return data;
}

// 生成博客数据
function generateBlogData() {
  const blogData = [];

  if (!fs.existsSync(blogDir)) {
    console.error('Blog directory not found:', blogDir);
    return;
  }

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      const postDir = path.join(blogDir, entry.name);
      const postData = readBlogPost(postDir);

      if (postData) {
        blogData.push({
          title: postData.title || entry.name,
          description: postData.description || '',
          permalink: `/blog/${postData.slug || entry.name}`,
          date: postData.date || new Date().toISOString().split('T')[0],
          tags: Array.isArray(postData.tags) ? postData.tags : []
        });
      }
    }
  });

  // 按日期排序（最新的在前）
  blogData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 写入 JSON 文件
  const outputPath = path.join(__dirname, '../static/blog-posts.json');
  fs.writeFileSync(outputPath, JSON.stringify(blogData, null, 2));

  console.log(`Generated blog data with ${blogData.length} posts`);
  console.log('Output:', outputPath);
}

// 运行脚本
generateBlogData();