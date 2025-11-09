#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 自动构建博客数据脚本
 * 扫描 blog 目录下的所有文章，提取 frontmatter 信息并生成 JSON 数据
 */

function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    console.warn('未找到 frontmatter，跳过该文件');
    return null;
  }

  const frontmatterStr = match[1];
  const frontmatter = {};

  // 解析 YAML frontmatter
  const lines = frontmatterStr.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // 移除引号
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // 处理数组类型
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
    }

    frontmatter[key] = value;
  }

  return frontmatter;
}

function calculateReadingTime(content) {
  // 移除 frontmatter
  const contentWithoutFrontmatter = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');

  // 计算字数（中文按字符计算，英文按单词计算）
  const chineseChars = (contentWithoutFrontmatter.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (contentWithoutFrontmatter.match(/[a-zA-Z]+/g) || []).length;
  const totalWords = chineseChars + englishWords;

  // 假设每分钟阅读 200 字（中英文合计）
  const readingTimeMinutes = Math.ceil(totalWords / 200);
  return `${readingTimeMinutes} min read`;
}

function scanBlogDirectory() {
  const blogDir = path.join(__dirname, '../blog');
  const posts = [];

  if (!fs.existsSync(blogDir)) {
    console.error('Blog directory not found:', blogDir);
    return posts;
  }

  const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  for (const entry of entries) {
    const entryPath = path.join(blogDir, entry);

    // 查找 index.md 或 index.mdx 文件
    let articleFile = null;
    const possibleFiles = ['index.md', 'index.mdx'];

    for (const possibleFile of possibleFiles) {
      const filePath = path.join(entryPath, possibleFile);
      if (fs.existsSync(filePath)) {
        articleFile = filePath;
        break;
      }
    }

    if (!articleFile) {
      console.warn(`在 ${entry} 目录中未找到 index.md 或 index.mdx 文件`);
      continue;
    }

    try {
      const content = fs.readFileSync(articleFile, 'utf-8');
      const frontmatter = extractFrontmatter(content);

      if (!frontmatter) {
        continue;
      }

      // 验证必要字段
      if (!frontmatter.title || !frontmatter.date || !frontmatter.slug) {
        console.warn(`文章 ${entry} 缺少必要字段（title, date, slug）`);
        continue;
      }

      // 构建博客文章数据
      const postData = {
        title: frontmatter.title,
        description: frontmatter.description || '',
        permalink: `/blog/${frontmatter.slug}`,
        date: frontmatter.date,
        tags: [],
        readingTime: calculateReadingTime(content)
      };

      // 处理标签
      if (frontmatter.tags) {
        if (Array.isArray(frontmatter.tags)) {
          postData.tags = frontmatter.tags.map(tag => ({ label: tag }));
        } else if (typeof frontmatter.tags === 'string') {
          postData.tags = frontmatter.tags.split(',').map(tag => ({ label: tag.trim() }));
        }
      }

      posts.push(postData);
      console.log(`✅ 已处理文章: ${postData.title}`);

    } catch (error) {
      console.error(`处理文章 ${entry} 时出错:`, error.message);
    }
  }

  return posts;
}

function main() {
  console.log('🚀 开始自动构建博客数据...\n');

  const posts = scanBlogDirectory();

  if (posts.length === 0) {
    console.warn('⚠️  未找到任何博客文章');
    return;
  }

  // 按日期排序（最新的在前）
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 生成数据文件
  const outputPath = path.join(__dirname, '../src/hooks/blogPostsData.js');
  const content = `// 自动生成的博客数据文件
// 请勿手动编辑此文件，此文件由 scripts/generate-blog-data.js 自动生成

export const blogPostsData = ${JSON.stringify(posts, null, 2)};

console.log('📝 已加载 ${posts.length} 篇博客文章数据');
`;

  try {
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`\n✅ 成功生成博客数据文件: ${outputPath}`);
    console.log(`📊 总共处理了 ${posts.length} 篇文章`);

    // 显示文章列表
    console.log('\n📚 文章列表:');
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} (${post.date})`);
    });

  } catch (error) {
    console.error('❌ 生成数据文件时出错:', error.message);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { scanBlogDirectory, extractFrontmatter };