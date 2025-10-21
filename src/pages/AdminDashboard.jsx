import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "../supabaseClient";
import bgImage from "@/assets/background-admin.jpg";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const initialFormState = {
    title: "",
    category: "",
    location: "",
    year: "",
    description: "",
    image: "",
    value: "",
    duration: "",
    features: "",
    excerpt: "",
    content: "",
    author: "",
    date: "",
    read_time: "",
    featured: false,
  };

  const [form, setForm] = useState(initialFormState);

  /** Fetch Projects & Blogs */
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: projData, error: projErr } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });
      if (projErr) throw projErr;
      setProjects(projData || []);

      const { data: blogData, error: blogErr } = await supabase
        .from("blogs")
        .select("*")
        .order("id", { ascending: false });
      if (blogErr) throw blogErr;
      setBlogs(blogData || []);
    } catch (err) {
      console.error(err);
      setMessage("Error fetching data: " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /** Handle input change */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  /** Open modal for add/edit */
  const openModal = (data = null) => {
    if (data) {
      setEditData(data);
      setForm({ ...initialFormState, ...data });
    } else {
      setEditData(null);
      setForm(initialFormState);
    }
    setModalOpen(true);
  };

  /** Close modal */
  const closeModal = () => {
    setModalOpen(false);
    setEditData(null);
  };

/** Image Upload Function */
/** Image Upload Function */
const uploadImage = async (file) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `${activeTab}/${fileName}`;

    // ✅ Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from("project-images")
      .upload(filePath, file);

    if (error) throw error;

    // ✅ Get Public URL
    const { data: urlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(filePath);

    console.log("✅ Uploaded Image URL:", urlData.publicUrl);
    return urlData.publicUrl;
  } catch (err) {
    console.error("Upload error:", err);
    throw err;
  }
};

  /** Submit form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = form.image;

      // ✅ If image is a File, upload first
      if (form.image instanceof File) {
        imageUrl = await uploadImage(form.image);
      }

      // ✅ Convert features safely
      const featuresArray = Array.isArray(form.features)
        ? form.features
        : form.features
        ? form.features.split(",").map((f) => f.trim())
        : [];

      if (activeTab === "projects") {
        const projectData = {
          title: form.title,
          category: form.category,
          location: form.location,
          year: form.year,
          description: form.description,
          features: featuresArray,
          image: imageUrl,
        };

        if (editData) {
          const { error } = await supabase
            .from("projects")
            .update(projectData)
            .eq("id", editData.id);
          if (error) throw error;
          setMessage("✅ Project updated successfully!");
        } else {
          const { error } = await supabase
            .from("projects")
            .insert([projectData]);
          if (error) throw error;
          setMessage("✅ Project added successfully!");
        }
      } else {
        // ✅ Blog section
        const blogData = {
          title: form.title,
          excerpt: form.excerpt,
          content: form.content,
          author: form.author,
          date: form.date,
          category: form.category,
          read_time: form.read_time,
          featured: form.featured,
          image: imageUrl,
        };

        if (editData) {
          const { error } = await supabase
            .from("blogs")
            .update(blogData)
            .eq("id", editData.id);
          if (error) throw error;
          setMessage("✅ Blog updated successfully!");
        } else {
          const { error } = await supabase.from("blogs").insert([blogData]);
          if (error) throw error;
          setMessage("✅ Blog added successfully!");
        }
      }

      await fetchData();
      closeModal();
    } catch (err) {
      console.error("Error:", err);
      setMessage("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  /** Delete record */
  const handleDelete = async (table, id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
      setMessage(`${table === "projects" ? "Project" : "Blog"} deleted`);
      await fetchData();
    } catch (err) {
      console.error(err);
      setMessage("Delete Error: " + err.message);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="relative z-10 mt-6 p-8 space-y-5 pt-16 bg-black/60 text-white rounded-lg min-h-screen">
        <h1 className="text-3xl font-bold text-center pt-16">
          Admin Dashboard
        </h1>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap pt-12 ">
          <div className="flex gap-4 flex-wrap ">
            <Button
              className="bg-gradient-primary text-white hover:bg-[#6ddcf5] hover:text-white"
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </Button>
            <Button
              className="bg-gradient-primary text-white hover:bg-[#6ddcf5] hover:text-white"
              onClick={() => setActiveTab("blogs")}
            >
              Blogs
            </Button>
          </div>

          <div className="ml-auto">
            <Button onClick={() => openModal(null)} className="z-10">
              Add {activeTab === "projects" ? "Project" : "Blog"}
            </Button>
          </div>
        </div>

        {/* Message */}
        {message && <p className="text-green-400">{message}</p>}

        {/* Table */}
        <div className="overflow-x-auto shadow rounded-lg text-gray-100 text-center">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-2 border-b">Title</th>
                <th className="p-2 border-b">
                  {activeTab === "projects" ? "Category" : "Author"}
                </th>
                <th className="p-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "projects" ? projects : blogs).map((item) => (
                <tr key={item.id} className="hover:bg-gray-700">
                  <td className="p-3 border-b">{item.title}</td>
                  <td className="p-3 border-b">
                    {activeTab === "projects" ? item.category : item.author}
                  </td>
                  <td className="p-3 border-b flex gap-4 justify-center">
                    <Button size="sm" onClick={() => openModal(item)}>
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(activeTab, item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 z-50 ">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl p-6 w-full max-w-xl relative shadow-2xl ">
              <h2 className="text-xl font-bold mb-4">
                {editData ? "Edit" : "Add"}{" "}
                {activeTab === "projects" ? "Project" : "Blog"}
              </h2>

              <form
                className="space-y-2 pb-5"
                onSubmit={handleSubmit}
                key={editData ? editData.id : "new"}
              >
                <input
                  name="title"
                  placeholder="Title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-300 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none"
                  required
                />

                {activeTab === "projects" ? (
                  <>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none appearance-none"
                      required
                    >
                      <option value="" disabled className="text-gray-300">
                        Select Category
                      </option>
                      <option value="Commercial" className="text-black">
                        Commercial
                      </option>
                      <option value="Residential" className="text-black">
                        Residential
                      </option>
                      <option value="Mixed-Use" className="text-black">
                        Mixed-Use
                      </option>
                      <option value="Renovation" className="text-black">
                        Renovation
                      </option>
                    </select>

                    <input
                      name="location"
                      placeholder="Location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-300 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />

                    <input
                      name="year"
                      placeholder="Year"
                      value={form.year}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-300 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />

                    <textarea
                      name="description"
                      placeholder="Description"
                      value={form.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-300 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none min-h-[100px] resize-none"
                    />

                    <input
                      name="features"
                      placeholder="Features (comma separated)"
                      value={form.features}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md text-white placeholder-gray-300 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />

                    {/* ✅ Correct File Input */}
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setForm({ ...form, image: file });
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-lg bg-transparent text-gray-200 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0799b3] file:text-white hover:file:bg-[#057d92]"
                    />
                  </>
                ) : (
                  <>
                    <input
                      name="excerpt"
                      placeholder="Excerpt"
                      value={form.excerpt}
                      onChange={handleChange}
                      className="w-full p-2 text-sm border border-white/20 rounded-md bg-white/5 text-white placeholder-gray-300 focus:ring-1 focus:ring-[#0799b3] focus:border-transparent outline-none"
                      required
                    />
                    <textarea
                      name="content"
                      placeholder="Content"
                      value={form.content}
                      onChange={handleChange}
                      className="w-full p-2 text-sm border border-white/20 rounded-md bg-white/5 text-white placeholder-gray-300 focus:ring-1 focus:ring-[#0799b3] focus:border-transparent outline-none min-h-[100px] resize-none"
                    />
                    <input
                      name="author"
                      placeholder="Author"
                      value={form.author}
                      onChange={handleChange}
                      className="w-full p-2 text-sm border border-white/20 rounded-md bg-white/5 text-white placeholder-gray-300 focus:ring-1 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full p-2 text-sm border border-white/20 rounded-md bg-white/5 text-white focus:ring-1 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-white/20 rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none appearance-none"
                      required
                    >
                      <option value="" disabled className="text-gray-300">
                        Select Category
                      </option>
                      <option value="Commercial" className="text-black">
                        Commercial
                      </option>
                      <option value="Residential" className="text-black">
                        Residential
                      </option>
                      <option value="Mixed-Use" className="text-black">
                        Mixed-Use
                      </option>
                      <option value="Renovation" className="text-black">
                        Renovation
                      </option>
                    </select>
                    <input
                      name="read_time"
                      placeholder="Read Time (e.g., 5 min)"
                      value={form.read_time}
                      onChange={handleChange}
                      className="w-full p-2 text-sm border border-white/20 rounded-md bg-white/5 text-white placeholder-gray-300 focus:ring-1 focus:ring-[#0799b3] focus:border-transparent outline-none"
                    />
                    <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1.5 rounded-md transition-colors text-sm">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={form.featured}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#0799b3] cursor-pointer"
                      />
                      <span className="font-medium">Featured</span>
                    </label>

                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setForm({ ...form, image: file });
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-lg bg-transparent text-gray-200 focus:ring-2 focus:ring-[#0799b3] focus:border-transparent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0799b3] file:text-white hover:file:bg-[#057d92]"
                    />
                  </>
                )}

                <div className="flex justify-end gap-4 mt-6 ">
                  <Button
                    type="button"
                    onClick={closeModal}
                    className="bg-gradient-primary text-white hover:bg-[#6ddcf5] hover:text-white"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default AdminDashboard;